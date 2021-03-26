function get(url, callback) {
    this.$axios
        .get(url)
        .then((res) => {
            callback(res)
        })
        .catch((error) => {
            window.console.log(error);
        });
}

function post(url,data, callback) {
    this.$axios
        .post(url, data)
        .then((res) => {
            callback(res)
        })
        .catch((error) => {
            window.console.log(error);
        });
}

module.exports = {get,post}