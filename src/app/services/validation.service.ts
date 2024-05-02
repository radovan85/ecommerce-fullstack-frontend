import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  validateProductCategory() {

    var categoryName = (<HTMLInputElement>document.getElementById(`categoryName`)).value;
    var categoryNameError = document.getElementById(`categoryNameError`);
    var returnValue = true;

    if (categoryNameError) {
      if (categoryName === `` || categoryName.length > 40) {
        returnValue = false;
        categoryNameError.style.visibility = `visible`;
      } else {
        categoryNameError.style.visibility = `hidden`;
      }
    }

    return returnValue;
  }

  validateProduct() {
    var productName = (<HTMLInputElement>document.getElementById(`product-name`)).value;
    var description = (<HTMLInputElement>document.getElementById(`product-description`)).value;
    var productBrand = (<HTMLInputElement>document.getElementById(`product-brand`)).value;
    var productModel = (<HTMLInputElement>document.getElementById(`product-model`)).value;
    var productPrice = (<HTMLInputElement>document.getElementById(`product-price`)).value;
    var unitStock = (<HTMLInputElement>document.getElementById(`unit-stock`)).value;
    var discount = (<HTMLInputElement>document.getElementById(`discount`)).value;
    var categoryId = (<HTMLInputElement>document.getElementById(`categoryId`)).value;

    var nameError = document.getElementById(`nameError`);
    var descriptionError = document.getElementById(`descriptionError`);
    var brandError = document.getElementById(`brandError`);
    var modelError = document.getElementById(`modelError`);
    var priceError = document.getElementById(`priceError`);
    var stockError = document.getElementById(`stockError`);
    var discountError = document.getElementById(`discountError`);
    var categoryIdError = document.getElementById(`categoryIdError`);

    var productPriceNumber = Number(productPrice);
    var unitStocNumber = Number(unitStock);
    var discountNumber = Number(unitStock);
    var returnValue = true;

    if (nameError) {
      if (productName.trim() === `` || productName.trim.length > 40) {
        returnValue = false;
        nameError.style.visibility = `visible`;
      } else {
        nameError.style.visibility = `hidden`;
      }
    }

    if (descriptionError) {
      if (description.trim() === `` || description.trim.length > 100) {
        returnValue = false;
        descriptionError.style.visibility = `visible`;
      } else {
        descriptionError.style.visibility = `hidden`;
      }
    }


    if (brandError) {
      if (productBrand.trim() === `` || productBrand.trim.length > 40) {
        returnValue = false;
        brandError.style.visibility = `visible`;
      } else {
        brandError.style.visibility = `hidden`;
      }
    }


    if (modelError) {
      if (productModel.trim() === `` || productModel.trim.length > 40) {
        returnValue = false;
        modelError.style.visibility = `visible`;
      } else {
        modelError.style.visibility = `hidden`;
      }
    }


    if (priceError) {
      if (productPrice.trim() === `` || productPriceNumber < 1) {
        returnValue = false;
        priceError.style.visibility = `visible`;
      } else {
        priceError.style.visibility = `hidden`;
      }
    }


    if (stockError) {
      if (unitStock.trim() === `` || unitStocNumber < 0) {
        returnValue = false;
        stockError.style.visibility = `visible`;
      } else {
        stockError.style.visibility = `hidden`;
      }
    }


    if (discountError) {
      if (discount.trim() === `` || discountNumber < 0) {
        returnValue = false;
        discountError.style.visibility = `visible`;
      } else {
        discountError.style.visibility = `hidden`;
      }
    }


    if (categoryIdError) {
      if (categoryId.trim() === ``) {
        returnValue = false;
        categoryIdError.style.visibility = `visible`;
      } else {
        categoryIdError.style.visibility = `hidden`;
      }
    }

    return returnValue;
  }

  validateNumber(e: any) {
    var pattern = /^\d{0,4}(\.\d{0,4})?$/g;
    return pattern.test(e.key);
  }


  validateRegForm() {
    var firstName = (<HTMLInputElement>document.getElementById(`firstName`)).value;
    var lastName = (<HTMLInputElement>document.getElementById(`lastName`)).value;
    var email = (<HTMLInputElement>document.getElementById(`email`)).value;
    var password = (<HTMLInputElement>document.getElementById(`password`)).value;
    var confirmPassword = (<HTMLInputElement>document.getElementById(`confirmPassword`)).value;
    var phone = (<HTMLInputElement>document.getElementById(`phone`)).value;
    var address = (<HTMLInputElement>document.getElementById(`address`)).value;
    var city = (<HTMLInputElement>document.getElementById(`city`)).value;
    var state = (<HTMLInputElement>document.getElementById(`state`)).value;
    var country = (<HTMLInputElement>document.getElementById(`country`)).value;
    var postcode = (<HTMLInputElement>document.getElementById(`postcode`)).value;

    var firstNameError = document.getElementById(`firstNameError`);
    var lastNameError = document.getElementById(`lastNameError`);
    var emailError = document.getElementById(`emailError`);
    var passwordError = document.getElementById(`passwordError`);
    var phoneError = document.getElementById(`phoneError`);
    var addressError = document.getElementById(`addressError`);
    var cityError = document.getElementById(`cityError`);
    var stateError = document.getElementById(`stateError`);
    var countryError = document.getElementById(`countryError`);
    var postcodeError = document.getElementById(`postcodeError`);

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var returnValue = true;

    if (password != confirmPassword) {
      alert(`Password does Not Match!`);
      returnValue = false;
    }

    if (firstNameError) {
      if (firstName === `` || firstName.length > 30) {
        returnValue = false;
        firstNameError.style.visibility = `visible`;
      } else {
        firstNameError.style.visibility = `hidden`;
      }
    }

    if (lastNameError) {
      if (lastName === `` || lastName.length > 30) {
        returnValue = false;
        lastNameError.style.visibility = `visible`;
      } else {
        lastNameError.style.visibility = `hidden`;
      }
    }

    if (emailError) {
      if (email === `` || email.length > 50 || !regEmail.test(email)) {
        emailError.style.visibility = `visible`;
        returnValue = false;
      } else {
        emailError.style.visibility = `hidden`;
      }
    }

    if (passwordError) {
      if (password.length < 6 || password.length > 30) {
        passwordError.style.visibility = `visible`;
        returnValue = false;
      } else {
        passwordError.style.visibility = `hidden`;
      }
    }

    if (phoneError) {
      if (phone.length < 9 || phone.length > 15) {
        phoneError.style.visibility = `visible`;
        returnValue = false;
      } else {
        phoneError.style.visibility = `hidden`;
      }
    }

    if (addressError) {
      if (address === `` || address.length > 75) {
        addressError.style.visibility = `visible`;
        returnValue = false;
      } else {
        addressError.style.visibility = `hidden`;
      }
    }

    if (cityError) {
      if (city === `` || city.length > 40) {
        cityError.style.visibility = `visible`;
        returnValue = false;
      } else {
        cityError.style.visibility = `hidden`;
      }
    }

    if (stateError) {
      if (state === `` || state.length > 40) {
        stateError.style.visibility = `visible`;
        returnValue = false;
      } else {
        stateError.style.visibility = `hidden`;
      }
    }



    if (countryError) {
      if (country === `` || country.length > 40) {
        countryError.style.visibility = `visible`;
        returnValue = false;
      } else {
        countryError.style.visibility = `hidden`;
      }
    }

    if (postcodeError) {
      if (postcode.length < 5 || postcode.length > 10) {
        postcodeError.style.visibility = `visible`;
        returnValue = false;
      } else {
        postcodeError.style.visibility = `hidden`;
      }
    }

    return returnValue;

  }

  validateShippingAddress() {

    var address = (<HTMLInputElement>document.getElementById(`address`)).value;
    var city = (<HTMLInputElement>document.getElementById(`city`)).value;
    var state = (<HTMLInputElement>document.getElementById(`state`)).value;
    var country = (<HTMLInputElement>document.getElementById(`country`)).value;
    var postcode = (<HTMLInputElement>document.getElementById(`postcode`)).value;

    var addressError = document.getElementById(`addressError`);
    var cityError = document.getElementById(`cityError`);
    var stateError = document.getElementById(`stateError`);
    var countryError = document.getElementById(`countryError`);
    var postcodeError = document.getElementById(`postcodeError`);

    var returnValue = true;

    if (addressError) {
      if (address === `` || address.length > 75) {
        addressError.style.visibility = `visible`;
        returnValue = false;
      } else {
        addressError.style.visibility = `hidden`;
      }
    }

    if (cityError) {
      if (city === `` || city.length > 40) {
        cityError.style.visibility = `visible`;
        returnValue = false;
      } else {
        cityError.style.visibility = `hidden`;
      }
    }

    if (stateError) {
      if (state === `` || state.length > 40) {
        stateError.style.visibility = `visible`;
        returnValue = false;
      } else {
        stateError.style.visibility = `hidden`;
      }
    }



    if (countryError) {
      if (country === `` || country.length > 40) {
        countryError.style.visibility = `visible`;
        returnValue = false;
      } else {
        countryError.style.visibility = `hidden`;
      }
    }

    if (postcodeError) {
      if (postcode.length < 5 || postcode.length > 10) {
        postcodeError.style.visibility = `visible`;
        returnValue = false;
      } else {
        postcodeError.style.visibility = `hidden`;
      }
    }



    return returnValue;
  }


  validateCustomerPhone() {
    var customerPhone = (<HTMLInputElement>document.getElementById(`customerPhone`)).value;
    var customerPhoneError = document.getElementById(`customerPhone`);
    var returnValue = true;

    if (customerPhoneError) {
      if (customerPhone.length < 9 || customerPhone.length > 15) {
        customerPhoneError.style.visibility = `visible`;
        returnValue = false;
      } else {
        customerPhoneError.style.visibility = `hidden`;
      }
    }

    return returnValue;
  }







}
