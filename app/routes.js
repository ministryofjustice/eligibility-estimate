const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'check-for-benefits'
//NOT USING THE CHECK-FOR-BENEFITS ROUTE IN ITERATION 4
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

//Eligibility question at the start
router.post('/eligibility-branching', function (req, res) {

  // Make a variable and give it the value from 'passport-benefits'
  var signpostedUser = req.session.data['intended-user']

  // Check whether the variable matches a condition
  if (signpostedUser == "Yes"){
    // Skip income and outgoings and send user to property q's
    res.redirect('/case-choice-details')
  } else {
    // Send user to income to answer all financial q's
    res.redirect('/signpost-eligibility')
  }

})

//Eligibility question at the start
router.post('/client-benefits-decide', function (req, res) {

  // Make a variable and give it the value from 'passport-benefits'
  var firstBenefit = req.session.data['client-benefits']

  // Check whether the variable matches a condition
  if (firstBenefit == "Yes"){
    // Skip income and outgoings and send user to property q's
    res.redirect('/client-benefits-entry')
  } else {
    // Send user to income to answer all financial q's
    res.redirect('/client-income')
  }

})

//Eligibility question at the start
router.post('/client-benefits-decide-1', function (req, res) {

  // Make a variable and give it the value from 'passport-benefits'
  var firstBenefit = req.session.data['has_other_benefits']

  // Check whether the variable matches a condition
  if (firstBenefit == "Yes"){
    // Skip income and outgoings and send user to property q's
    res.redirect('/client-benefits-entry-2')
  } else {
    // Send user to income to answer all financial q's
    res.redirect('/client-income')
  }

})

//Eligibility question at the start
router.post('/partner-benefits-decide', function (req, res) {

  // Make a variable and give it the value from 'passport-benefits'
  var parnerFirstBenefit = req.session.data['partner-benefits']

  // Check whether the variable matches a condition
  if (parnerFirstBenefit == "Yes"){
    // Skip income and outgoings and send user to property q's
    res.redirect('/partner-benefits-entry')
  } else {
    // Send user to income to answer all financial q's
    res.redirect('/partner-income')
  }

})

//Eligibility question at the start
router.post('/partner-benefits-decide-1', function (req, res) {

  // Make a variable and give it the value from 'passport-benefits'
  var parnerFirstBenefit = req.session.data['partner-has_other_benefits']

  // Check whether the variable matches a condition
  if (parnerFirstBenefit == "Yes"){
    // Skip income and outgoings and send user to property q's
    res.redirect('/partner-benefits-entry-2')
  } else {
    // Send user to income to answer all financial q's
    res.redirect('/partner-income')
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
  var ownsHomePartner = req.session.data['partner-homeowner']

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
    res.redirect('/client-assets')
  } else {
    // Send user to vehicle q's to answer all financial q's
    res.redirect('/client-vehicle-2')
  }

  })

// Run this code when a form is submitted to 'ownsVehiclePartner'
router.post('/ownsVehiclePartner', function (req, res) {

  // Make a variable and give it the value from 'partner-vehicle-own'
  var ownsVehiclePartner = req.session.data['partner-vehicle-own']

  // Check whether the variable matches a condition
  if (ownsVehiclePartner == "No"){
    // Skip vehicle q's and go to assets q's
    res.redirect('/partner-assets')
  } else {
    // Send user to vehicle q's to answer all financial q's
    res.redirect('/partner-vehicle-2')
  }

  })

// Run this code when a form is submitted to 'regularUseVehicle'
router.post('/regularUseVehicle', function (req, res) {

  // Make a variable and give it the value from 'client-vehicle-use'
  var regularUseVehicle = req.session.data['client-vehicle-use']

  // Check whether the variable matches a condition
  if (regularUseVehicle == "No"){
    // Skip vehicle q's and go to assets q's
    res.redirect('/client-assets')
  } else {
    // Send user to next vehicle q to answer all financial q's
    res.redirect('/client-vehicle-3')
  }

  })

// Run this code when a form is submitted to 'partnerRegularUseVehicle'
router.post('/partnerRegularUseVehicle', function (req, res) {

  // Make a variable and give it the value from 'partner-vehicle-use'
  var partnerRegularUseVehicle = req.session.data['partner-vehicle-use']

  // Check whether the variable matches a condition
  if (partnerRegularUseVehicle == "No"){
    // Skip vehicle q's and go to assets q's
    res.redirect('/partner-assets')
  } else {
    // Send user to next vehicle q to answer all financial q's
    res.redirect('/partner-vehicle-3')
  }

  })

  // Run this code when a form is submitted to 'buyVehicleThree'
  router.post('/buyVehicleThree', function (req, res) {

    // Make a variable and give it the value from 'client-vehicle-three'
    var buyVehicleThree = req.session.data['client-vehicle-three']

    // Check whether the variable matches a condition
    if (buyVehicleThree == "Yes"){
      // Skip vehicle q's and go to assets q's
      res.redirect('/client-assets')
    } else {
      // Send user to next vehicle q to answer all financial q's
      res.redirect('/client-vehicle-4')
    }

    })

// Run this code when a form is submitted to 'partnerBuyVehicleThree'
router.post('/partnerBuyVehicleThree', function (req, res) {

  // Make a variable and give it the value from 'client-vehicle-three'
  var partnerBuyVehicleThree = req.session.data['partner-vehicle-three']

  // Check whether the variable matches a condition
  if (partnerBuyVehicleThree == "Yes"){
    // Skip vehicle q's and go to assets q's
    res.redirect('/partner-assets')
  } else {
    // Send user to next vehicle q to answer all financial q's
    res.redirect('/partner-vehicle-4')
  }

  })



  ///////////////////////////////////
  // V2 routes here


module.exports = router
