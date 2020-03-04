import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
$(function() {
    $('li:odd').css('backgroundColor', 'lightblue')
    $('li:even').css('backgroundColor', 'yellow')
})

class Person {
    static name = 'liudehua'
}
console.log(Person.name);