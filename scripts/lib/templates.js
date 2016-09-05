'use strict'

const { writeFile, readFile } = require('fs')
const pug = require('pug')
const cheerio = require('cheerio')
const Bluebird = require('bluebird')

const readFileAsync = Bluebird.promisify(readFile)
const writeFileAsync = Bluebird.promisify(writeFile)

module.exports = {
  copyTemplate,
  writeTemplate,
  compilePugTemplate
}

function copyTemplate (file) {
  console.log('copy template', file)
  return readFileAsync(file, { encoding: 'utf-8' })
    .then(writeTemplate.bind(null, file))
}

function writeTemplate (file, content) {
  const output = file.replace(/^src\//, '')
  console.log('write template', output)
  const $ = cheerio.load(content)
  $('[data-component]').each(function () {
    const innerHTML = $(this).html()
    let props
    try {
      props = JSON.parse($(this).attr('data-props') || '{}')
    } catch (err) {
      console.log(err.stack)
      return
    }
    Object.assign(props, { innerHTML: props.innerHTML || innerHTML })
    $(this).attr('data-props', JSON.stringify(props))
    $(this).html('')
  })
  return writeFileAsync(output, $.html())
}

function compilePugTemplate (file) {
  const api = require(`${process.cwd()}/pug_api`)
  console.log('compile template', file)
  const fn = pug.compileFile(file)
  return writeTemplate(file.replace(/pug$/, 'html'), fn(api))
}
