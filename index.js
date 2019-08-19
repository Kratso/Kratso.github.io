var loading = true
var credentials = false
var sheet = false

var loadCount = 0

jQuery(document).ready(() => {
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
            jQuery('#dots').html(dots)
            loadCount++
        }

    }, 300)
})

function hideLoad() {

    jQuery('.loading').css("display", "none")
    jQuery('.credentials').css("display", "grid")

    setTimeout(() => {
        credentials = false
        sheet = true
        hideCred()
    }, 3000)

    setInterval(() => {
        if (credentials)
            jQuery('.pass').val(jQuery('.pass').val() + 'a')
        if (jQuery('.pass').val().length == 25)
            credentials = false
    }, 100)

}

function hideCred() {
    loading = true
    jQuery('.loading').css("display", "block")
    jQuery('.credentials').css("display", "none")
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
            jQuery('#dots').html(dots)
            loadCount++
        }


        const canvas = jQuery("#stats")
       const stats = new Chart(canvas, {
            type: "radar",
            data:   {
                labels: ['Fuerza', 'Destreza', 'Aguante', 'Agilidad'],
                datasets :[
                    {
                        label: "Datos del Sujeto",
                        data: [7,5,7,5],
                        backgroundColor: 'rgba(171, 200, 192, 0.6)',
                        borderColor: 'rgba(158, 228, 147, 1)',
                        lineTension: 0,
                        borderWidth: 1,
                    }
                ]
            },
            options : {
                scale : {
                    ticks: {
                        max: 10,
                        min: 0,
                        stepSize: 1.0,
                        display: false
                    },
                },
            }
        })
    }, 300)
}

function hideLoad2() {

    jQuery('.loading').css("display", "none")
    jQuery('.sheet').css("display", "grid")

}

