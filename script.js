const git = document.getElementById('git');
const frontEnd = document.getElementById('front-end')
const linkedIn = document.getElementById('linkedin')
const twitter = document.getElementById('twitter')
const insta = document.getElementById('insta')


const links = [git,frontEnd,linkedIn,twitter,insta]

for (const link of links) {
    link.addEventListener('mouseover', (event) => {
        
        link.style.opacity = ''

        for (const notLink of links) {
            if (notLink !== event.currentTarget) {
                notLink.style.opacity = '0.5'
            }
        }

    link.addEventListener('mouseout', (event) => {

        link.style.opacity = ''

        for (const notLink of links) {
            if (notLink !== event.currentTarget) {
                notLink.style.opacity = ''
            }
        }
    })
    })
    
}

