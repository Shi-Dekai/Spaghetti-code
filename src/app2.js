import './app2.css'
import $ from 'jquery'

const $taBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$taBar.on('click', 'li',e =>{
    const $li = $(e.currentTarget)
    $li
        .addClass('selected')
        .siblings()
        .removeClass('selected')
    const $index = $li.index()
    console.log($index)
    $tabContent.children().eq($index)
                .addClass('active')
                .siblings().removeClass('active')
})

$taBar.children().eq(0).trigger('click')