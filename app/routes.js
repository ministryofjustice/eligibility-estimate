const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'check-for-benefits'
router.post('/check-for-benefits', function (req, res) {

  // Make a variable and give it the value from 'passport-benefits'
  var passportingBenefits = req.session.data['passport-benefits']

  // Check whether the variable matches a condition
  if (passportingBenefits == "Yes"){
    // Skip income and outgoings and send user to property q's
    res.redirect('/client-property')
  } else {
    // Send user to income to answer all financial q's
    res.redirect('/monthly-income')
  }

})

// Run this code when a form is submitted to 'ownsHome'
router.post('/ownsHome', function (req, res) {

  // Make a variable and give it the value from 'homeowner'
  var ownsHome = req.session.data['homeowner']

  // Check whether the variable matches a condition
  if (ownsHome == "No"){
    // Skip property q's and go to vehicle q's
    res.redirect('/client-vehicle-1')
  } else {
    // Send user to property q's to answer all financial q's
    res.redirect('/client-property-entry')
  }

  })

  // Run this code when a form is submitted to 'ownsHomePartner'
  router.post('/ownsHomePartner', function (req, res) {

    // Make a variable and give it the value from 'homeowner'
    var ownsHomePartner = req.session.data['partnerhomeowner']

    // Check whether the variable matches a condition
    if (ownsHomePartner == "No"){
      // Skip property q's and go to vehicle q's
      res.redirect('/partner-vehicle-1')
    } else {
      // Send user to property q's to answer all financial q's
      res.redirect('/partner-property-entry')
    }

    })

  // Run this code when a form is submitted to 'ownsVehicle'
  router.post('/ownsVehicle', function (req, res) {

    // Make a variable and give it the value from 'client-vehicle-own'
    var ownsVehicle = req.session.data['client-vehicle-own']

    // Check whether the variable matches a condition
    if (ownsVehicle == "No"){
      // Skip vehicle q's and go to assets q's
      res.redirect('/assets')
    } else {
      // Send user to vehicle q's to answer all financial q's
      res.redirect('/client-vehicle-2')
    }

    })

    // Run this code when a form is submitted to 'ownsVehiclePartner'
    router.post('/ownsVehiclePartner', function (req, res) {

      // Make a variable and give it the value from 'client-vehicle-own'
      var ownsVehiclePartner = req.session.data['partner-vehicle-own']

      // Check whether the variable matches a condition
      if (ownsVehiclePartner == "No"){
        // Skip vehicle q's and go to assets q's
        res.redirect('/assets-partner')
      } else {
        // Send user to vehicle q's to answer all financial q's
        res.redirect('/partner-vehicle-2')
      }

      })



module.exports = router
