module.exports = {
  webpackBarName: 'shark-form',
  webpackBanner:
    ' build: shark-form \n shark-form.com \n https://gitee.com/elwin0204/shark-form \n time: ',
  donationConsole() {
    const chalk = require('chalk')
    console.log(
      chalk.green(
        `> Welcome to shark-form and hope to bring you a pleasant experience`
      )
    )
    console.log(
      chalk.green(
        `> If you have any suggestions, please contact Elwin for feedback`
      )
    )

    console.log(
      chalk.green(
        `> If you have any interesting and creative ideas, please join us`
      )
    )

    console.log(
      chalk.green(
        `> If you do not want to display the above information, you can configure shutdown in config`
      )
    )
    console.log('\n')
  },
};
