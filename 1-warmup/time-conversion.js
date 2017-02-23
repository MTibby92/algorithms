/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

Input Format

A single string containing a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM), where 01 <= hh <= 12 and 00<= mm, ss <= 59.

Output Format

Convert and print the given time in 24-hour format, where 00<= hh <= 23.
*/

function main() {
    var time = readLine();

    var timeArr = time.split('')
    var codeArr = timeArr.slice(8)
    var code = codeArr.join('') // AM or PM

    if (parseInt(timeArr.slice(0,2).join('')) == 12 && code == 'AM') { // handles midnight case
    	var hour = '00'
    	var hourArr = hour.split('')
    	var newTimeArr = hourArr.concat(timeArr.slice(2,8))
    	var newTime = newTimeArr.join('')
    	console.log(newTime)
    }
    else if (code == 'AM') {
    	console.log(timeArr.slice(0,8).join('')) // cuts out the AM or PM
    }
    else if (parseInt(timeArr.slice(0,2).join('')) == 12 && code == 'PM') { // handles noon
    	var hour = '12'
    	var hourArr = hour.split('')
    	var newTimeArr = hourArr.concat(timeArr.slice(2,8))
    	var newTime = newTimeArr.join('')
    	console.log(newTime)
    } else { // cuts out the hour, adds 12, creates multiple arrays, joins them, cuts out AM PM, and converts to string
    	var hour = parseInt(timeArr.slice(0,2).join(''))
    	hour += 12
    	var hourArr = hour.toString().split('')
    	var newTimeArr = hourArr.concat(timeArr.slice(2,8))
    	var newTime = newTimeArr.join('')
    	console.log(newTime)
    }
}