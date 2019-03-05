let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function() {

    let current = this.from;
    let last = this.to;

    return {
        next() {
            if (current <= last) {
                return {
                    done: false,
                    value: toFormat(new Date(current.setDate(current.getDate() + 1)))


            };
            } else {
                return {
                    done: true
                };
            }
        }
    }
};

function toFormat(day) {
    let a = day.getDate();
    if (a < 10) {
        a = '0' + a;
    }
    a = a.toString();
    if (day.getDay() > 5 || day.getDay() === 0) {
        a = '[' + a + ']';
    }
    return a;
}







