const bcrypt = require('bcryptjs');

module.exports = {
    async encrypt(value) {
        var result = await bcrypt.hash(value, 8);

        return result;
    },

    async compareSync(inputPassword, password) {
        if(password) {
            return bcrypt.compareSync(await inputPassword, password);
        }
    }
}