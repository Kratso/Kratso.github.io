var loading = true
var credentials = false
var sheet = false

var loadCount = 0

$(document).ready(() => {
    setTimeout(() => {
        loading = false
        credentials = true
        hideLoad()
    }, 2000)

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
        hideCred()
    }, 3000)

    setInterval(() => {
        if (credentials)
            $('.pass').val($('.pass').val() + 'a')
        if ($('.pass').val().length == 25)
            credentials = false
    }, 100)

}

function hideCred() {
    loading = true
    $('.loading').css("display", "block")
    $('.credentials').css("display", "none")
    setTimeout(() => {
        loading = false
        credentials = true
        hideLoad2()
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

}

function hideLoad2() {

    $('.loading').css("display", "none")
    $('.sheet').css("display", "grid")

}