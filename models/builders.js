const mongoose = require('mongoose');

const builderSchema = new mongoose.Schema({
    description: String,
    complete: Boolean
});

const Builders = mongoose.model('Builder', builderSchema);

module.exports = Builders;