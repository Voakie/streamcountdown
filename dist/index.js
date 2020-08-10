$(document).ready(function () {
  function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href
    }
    name = name.replace(/[\[\]]/g, "\\$&")
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url)
    if (!results) return null
    if (!results[2]) return ""
    return decodeURIComponent(results[2].replace(/\+/g, " "))
  }

  var theme = decodeURIComponent(getParameterByName("t"))
  var time = decodeURIComponent(getParameterByName("c"))
  var image = decodeURIComponent(getParameterByName("i"))
  var language = decodeURIComponent(getParameterByName("l"))
  var text = decodeURIComponent(getParameterByName("txt"))
  var timeDisplay = decodeURIComponent(getParameterByName("td"))

  if (theme == "null") {
    document.location.href = "new.html"
  }

  if (theme) {
    $(".text, .time, .sub").css("color", theme)
  }

  if (image == "green") {
    $("body").css("background-color", "rgb(0, 255, 0)")
  } else if (image !== undefined && image !== "green") {
    $("body").css("background-image", "url('" + image + "')")
  }

  if (text == "") {
    console.log("No text specified")
  } else {
    $(".text").text(text)
  }

  var locale

  if (language == "") {
    locale = window.navigator.userLanguage || window.navigator.language
  } else {
    locale = language
  }

  setInterval(function () {
    var startAt = moment(time, "YYYYMMDD, h:mm:ss").locale(locale)
    if (timeDisplay === "1") {
      $(".time").text(startAt.calendar())
    } else if (timeDisplay === "2") {
      $(".time").text(startAt.fromNow())
    } else {
      $(".time").text(startAt.calendar())
      $(".sub").text("(" + startAt.fromNow() + ")")
    }
  }, 500)
})
