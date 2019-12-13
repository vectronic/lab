
import { GluegunToolbox } from 'gluegun'


module.exports = {
  name: 'gluegun-example',
  run: async (toolbox: GluegunToolbox) => {
    const { print } = toolbox

    print.info('Welcome to your CLI')
  },
}
