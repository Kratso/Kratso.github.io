var loading = true
var credentials = false
var sheet = false

var loadCount = 0

$(document).ready(() => {
    setTimeout(() => {
        loading = false
        credentials = true
        hideLoad()
    }, 5000)

    setInterval(() => {
        if (loading) {
            let dots = ""
            for (let i = 0; i < loadCount % 3 + 1; i++)
                dots += "."
            $('#dots').html(dots)
            loadCount++
        }

    }, 300)
})

function hideLoad() {

    $('.loading').css("display", "none")
    $('.credentials').css("display", "grid")

    setTimeout(() => {
        credentials = false
        sheet = true
            //  hideCred()
    }, 2500)

    setInterval(() => {
        if (credentials)
            $('.pass').val($('.pass').val() + 'a')
    }, 100)

}

function hideCred() {
    $('.credentials').css("display", "none")
    $('.sheet').css("display", "grid")
}