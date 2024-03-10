const core = require('@actions/core')
const github = require('@actions/github')

try {
    const filename = core.getIntpu('filename')
    console.log(`Building ${filename}`)
    
}
catch (error) {
    core.setFailed(error.message)
}