import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private productStatus: string = '';

  constructor() { }

  setProductStatus(productStatus: string) {
    this.productStatus = productStatus;
  }

  validateRegForm() {
    var firstName = (<HTMLInputElement>document.getElementById("firstName")).value;
    var lastName = (<HTMLInputElement>document.getElementById("lastName")).value;
    var email = (<HTMLInputElement>document.getElementById("email")).value;
    var password = (<HTMLInputElement>document.getElementById("password")).value;
    var confirmpass = (<HTMLInputElement>document.getElementById("confirmpass")).value;
    var billingAddress = (<HTMLInputElement>document.getElementById("billingAddress")).value;
    var billingCity = (<HTMLInputElement>document.getElementById("billingCity")).value;
    var billingState = (<HTMLInputElement>document.getElementById("billingState")).value;
    var billingPostcode = (<HTMLInputElement>document.getElementById("billingPostcode")).value;
    var billingCountry = (<HTMLInputElement>document.getElementById("billingCountry")).value;
    var shippingAddress = (<HTMLInputElement>document.getElementById("shippingAddress")).value;
    var shippingCity = (<HTMLInputElement>document.getElementById("shippingCity")).value;
    var shippingState = (<HTMLInputElement>document.getElementById("shippingState")).value;
    var shippingPostcode = (<HTMLInputElement>document.getElementById("shippingPostcode")).value;
    var shippingCountry = (<HTMLInputElement>document.getElementById("shippingCountry")).value;
    var customerPhone = (<HTMLInputElement>document.getElementById("customerPhone")).value;

    var firstNameError = document.getElementById("firstNameError");
    var lastNameError = document.getElementById("lastNameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var billingAddressError = document.getElementById("billingAddressError");
    var billingCityError = document.getElementById("billingCityError");
    var billingStateError = document.getElementById("billingStateError");
    var billingPostcodeError = document.getElementById("billingPostcodeError");
    var billingCountryError = document.getElementById("billingCountryError");
    var shippingAddressError = document.getElementById("shippingAddressError");
    var shippingCityError = document.getElementById("shippingCityError");
    var shippingStateError = document.getElementById("shippingStateError");
    var shippingPostcodeError = document.getElementById("shippingPostcodeError");
    var shippingCountryError = document.getElementById("shippingCountryError");
    var customerPhoneError = document.getElementById("customerPhoneError");

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var returnValue = true;

    if (password != confirmpass) {
      alert("Password does Not Match.");
      return false;
    }

    if (firstNameError) {
      if (firstName === "" || firstName.length > 30) {
        returnValue = false;
        firstNameError.style.visibility = "visible";
      } else {
        firstNameError.style.visibility = "hidden";
      }
    }

    if (lastNameError) {
      if (lastName === "" || lastName.length > 30) {
        returnValue = false;
        lastNameError.style.visibility = "visible";
      } else {
        lastNameError.style.visibility = "hidden";
      }
    }

    if (emailError) {
      if (email === "" || email.length > 40 || !regEmail.test(email)) {
        emailError.style.visibility = "visible";
        returnValue = false;
      } else {
        emailError.style.visibility = "hidden";
      }
    }

    if (passwordError) {
      if (password.length < 6 || password.length > 30) {
        passwordError.style.visibility = "visible";
        returnValue = false;
      } else {
        passwordError.style.visibility = "hidden";
      }
    }

    if (billingAddressError) {
      if (billingAddress === "" || billingAddress.length > 75) {
        billingAddressError.style.visibility = "visible";
        returnValue = false;
      } else {
        billingAddressError.style.visibility = "hidden";
      }
    }

    if (billingCityError) {
      if (billingCity === "" || billingCity.length > 40) {
        billingCityError.style.visibility = "visible";
        returnValue = false;
      } else {
        billingCityError.style.visibility = "hidden";
      }
    }

    if (billingStateError) {
      if (billingState === "" || billingState.length > 40) {
        billingStateError.style.visibility = "visible";
        returnValue = false;
      } else {
        billingStateError.style.visibility = "hidden";
      }
    }

    if (billingPostcodeError) {
      if (billingPostcode.length < 5 || billingPostcode.length > 10) {
        billingPostcodeError.style.visibility = "visible";
        returnValue = false;
      } else {
        billingPostcodeError.style.visibility = "hidden";
      }
    }

    if (billingCountryError) {
      if (billingCountry === "" || billingCountry.length > 40) {
        billingCountryError.style.visibility = "visible";
        returnValue = false;
      } else {
        billingCountryError.style.visibility = "hidden";
      }
    }

    if (shippingAddressError) {
      if (shippingAddress === "" || shippingAddress.length > 75) {
        shippingAddressError.style.visibility = "visible";
        returnValue = false;
      } else {
        shippingAddressError.style.visibility = "hidden";
      }
    }

    if (shippingCityError) {
      if (shippingCity === "" || shippingCity.length > 40) {
        shippingCityError.style.visibility = "visible";
        returnValue = false;
      } else {
        shippingCityError.style.visibility = "hidden";
      }
    }

    if (shippingStateError) {
      if (shippingState === "" || shippingState.length > 40) {
        shippingStateError.style.visibility = "visible";
        returnValue = false;
      } else {
        shippingStateError.style.visibility = "hidden";
      }
    }

    if (shippingPostcodeError) {
      if (shippingPostcode.length < 5 || shippingPostcode.length > 10) {
        shippingPostcodeError.style.visibility = "visible";
        returnValue = false;
      } else {
        shippingPostcodeError.style.visibility = "hidden";
      }
    }

    if (shippingCountryError) {
      if (shippingCountry === "" || shippingCountry.length > 40) {
        shippingCountryError.style.visibility = "visible";
        returnValue = false;
      } else {
        shippingCountryError.style.visibility = "hidden";
      }
    }

    if (customerPhoneError) {
      if (customerPhone.length < 9 || customerPhone.length > 15) {
        customerPhoneError.style.visibility = "visible";
        returnValue = false;
      } else {
        customerPhoneError.style.visibility = "hidden";
      }
    }

    return returnValue
  }

  validateCategory() {
    var name = (<HTMLInputElement>document.getElementById(`name`)).value;
    var nameError = (<HTMLInputElement>document.getElementById(`nameError`));
    var returnValue = true;

    if (nameError) {
      if (name === "" || name.length > 40) {
        nameError.style.visibility = `visible`;
        returnValue = false;
      } else {
        nameError.style.visibility = `hidden`;
      }
    }

    return returnValue;
  }

  validateProduct() {
    var productDescription = (<HTMLInputElement>document.getElementById(`productDescription`)).value;
    var productBrand = (<HTMLInputElement>document.getElementById(`productBrand`)).value;
    var productModel = (<HTMLInputElement>document.getElementById(`productModel`)).value;
    var productName = (<HTMLInputElement>document.getElementById(`productName`)).value;
    var productPrice = (<HTMLInputElement>document.getElementById(`productPrice`)).value;
    var unitStock = (<HTMLInputElement>document.getElementById(`unitStock`)).value;
    var discount = (<HTMLInputElement>document.getElementById(`discount`)).value;
    var imageUrl = (<HTMLInputElement>document.getElementById(`imageUrl`)).value;
    var productCategoryId = (<HTMLInputElement>document.getElementById(`productCategoryId`)).value;
    var productStatus = this.productStatus;


    var productDescriptionError = (<HTMLInputElement>document.getElementById(`productDescriptionError`));
    var productStatusError = (<HTMLInputElement>document.getElementById(`productStatusError`));
    var productBrandError = (<HTMLInputElement>document.getElementById(`productBrandError`));
    var productModelError = (<HTMLInputElement>document.getElementById(`productModelError`));
    var productNameError = (<HTMLInputElement>document.getElementById(`productNameError`));
    var productPriceError = (<HTMLInputElement>document.getElementById(`productPriceError`));
    var unitStockError = (<HTMLInputElement>document.getElementById(`unitStockError`));
    var discountError = (<HTMLInputElement>document.getElementById(`discountError`));
    var imageUrlError = (<HTMLInputElement>document.getElementById(`imageUrlError`));
    var productCategoryIdError = (<HTMLInputElement>document.getElementById(`productCategoryIdError`));

    var productPriceNum = Number(productPrice);
    var unitStockNum = Number(unitStock);
    var discountNum = Number(discount);
    var returnValue = true;

    if (productDescriptionError) {
      if (productDescription === "" || productDescription.length > 90) {
        productDescriptionError.style.visibility = "visible";
        returnValue = false;
      } else {
        productDescriptionError.style.visibility = "hidden";
      }
    }

    if (productStatusError) {
      if (productStatus === "") {
        productStatusError.style.visibility = "visible";
        returnValue = false;
      } else {
        productStatusError.style.visibility = "hidden";
      }
    } else {
      console.log(`No error`);
    }

    if (productBrandError) {
      if (productBrand === "" || productBrand.length > 40) {
        productBrandError.style.visibility = "visible";
        returnValue = false;
      } else {
        productBrandError.style.visibility = "hidden";
      }
    }

    if (productModelError) {
      if (productModel === "" || productModel.length > 40) {
        productModelError.style.visibility = "visible";
        returnValue = false;
      } else {
        productModelError.style.visibility = "hidden";
      }
    }

    if (productNameError) {
      if (productName === "" || productName.length > 40) {
        productNameError.style.visibility = "visible";
        returnValue = false;
      } else {
        productNameError.style.visibility = "hidden";
      }
    }

    if (productPriceError) {
      if (productPrice === "" || productPriceNum < 10) {
        productPriceError.style.visibility = "visible";
        returnValue = false;
      } else {
        productPriceError.style.visibility = "hidden";
      }
    }

    if (unitStockError) {
      if (unitStock === "" || unitStockNum < 0) {
        unitStockError.style.visibility = "visible";
        returnValue = false;
      } else {
        unitStockError.style.visibility = "hidden";
      }
    }

    if (discountError) {
      if (discount === "" || discountNum < 0 || discountNum > 50) {
        discountError.style.visibility = "visible";
        returnValue = false;
      } else {
        discountError.style.visibility = "hidden";
      }
    }

    if (imageUrlError) {
      if (imageUrl === "" || imageUrl.length > 255) {
        imageUrlError.style.visibility = "visible";
        returnValue = false;
      } else {
        imageUrlError.style.visibility = "hidden";
      }
    }

    if (productCategoryIdError) {
      if (productCategoryId === "") {
        productCategoryIdError.style.visibility = "visible";
        returnValue = false;
      } else {
        productCategoryIdError.style.visibility = "hidden";
      }
    }

    return returnValue;
  }

  validateNumber(e: any) {
    var pattern = /^\d{0,4}(\.\d{0,4})?$/g;
    return pattern.test(e.key);
  }

  validateMessage() {
    var text = (<HTMLInputElement>document.getElementById(`text`)).value;
    var returnValue = true;
    var textError = document.getElementById(`textError`);

    text.trim();
    if (textError) {
      if (text === "" || text.length > 255) {
        textError.style.visibility = `visible`;
        returnValue = false;
      } else {
        textError.style.visibility = `hidden`;
      }
    }

    return returnValue;
  }

  validateAddress() {

    var address = (<HTMLInputElement>document.getElementById("address")).value;
    var city = (<HTMLInputElement>document.getElementById("city")).value;
    var state = (<HTMLInputElement>document.getElementById("state")).value;
    var postcode = (<HTMLInputElement>document.getElementById("postcode")).value;
    var country = (<HTMLInputElement>document.getElementById("country")).value;

    var addressError = document.getElementById("addressError");
    var cityError = document.getElementById("cityError");
    var stateError = document.getElementById("stateError");
    var postcodeError = document.getElementById("postcodeError");
    var countryError = document.getElementById("countryError");

    var returnValue = true;

    if (addressError) {
      if (address === "" || address.length > 75) {
        addressError.style.visibility = "visible";
        returnValue = false;
      } else {
        addressError.style.visibility = "hidden";
      }
    }

    if (cityError) {
      if (city === "" || city.length > 40) {
        cityError.style.visibility = "visible";
        returnValue = false;
      } else {
        cityError.style.visibility = "hidden";
      }
    }

    if (stateError) {
      if (state === "" || state.length > 40) {
        stateError.style.visibility = "visible";
        returnValue = false;
      } else {
        stateError.style.visibility = "hidden";
      }
    }

    if (postcodeError) {
      if (postcode.length < 5 || postcode.length > 10) {
        postcodeError.style.visibility = "visible";
        returnValue = false;
      } else {
        postcodeError.style.visibility = "hidden";
      }
    }

    if (countryError) {
      if (country === "" || country.length > 40) {
        countryError.style.visibility = "visible";
        returnValue = false;
      } else {
        countryError.style.visibility = "hidden";
      }
    }

    return returnValue;
  }

  validatePhoneNumber() {
    var customerPhone = (<HTMLInputElement>document.getElementById("customerPhone")).value;
    var customerPhoneError = document.getElementById("customerPhoneError");

    var returnValue = true;

    if (customerPhoneError) {
      if (customerPhone.length < 9 || customerPhone.length > 15) {
        customerPhoneError.style.visibility = "visible";
        returnValue = false;
      } else {
        customerPhoneError.style.visibility = "hidden";
      }
    }

    return returnValue;
  }
}
