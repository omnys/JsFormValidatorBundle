/**
 * Checks if value is a datetime string
 * @constructor
 * @author dev.ymalcev@gmail.com
 */
function SymfonyComponentValidatorConstraintsDateTime() {
    this.message = '';

    this.validate = function(value) {
        if (value) {
            var regexp = /^(\d{4})-(\d{2})-(\d{2}) (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
            return (!regexp.test(value))
                ? this.message.replace('{{ value }}', String(value))
                : null;
        }

        return null;
    }
}