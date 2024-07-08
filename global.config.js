module.exports = ( async ()=> {
    let config;

    switch(process.env.NODE_ENV) {
        case 'production':
            config = await require('./configs/production.config');
            break;
        case 'staging':
            config = await require('./configs/staging.config');
            break;
        case 'dev':
            config = await require('./configs/dev.config');
            break;
        default :
            config = await require('./configs/qa.config');
            break;
    }
    return {
        ...config,
    }
})();