import { dirname } from 'path'
import { IconsaucePlugin } from '@iconsauce/plugin'

const octiconPlugin: IconsaucePlugin = {
  prefix: 'oct',
  regex: {
    code: /(oct)(\/{1}[0-9a-z-]+){2}/gm,
    lib: /([a-zA-Z_\-/]+\/([0-9a-zA-Z_-]+)-(12|16|24)\.svg)/,
  },
  selector: (libPath: RegExpMatchArray) => `oct/${libPath[3]}/${libPath[2].replace(/[_]+/g, '-')}`,
  path: `${dirname(require.resolve('@primer/octicons/package.json'))}/build/svg/**/*.svg`,
}

export default octiconPlugin
module.exports = octiconPlugin
