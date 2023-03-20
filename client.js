// Stripe public key, safe to publish
var stripe = Stripe("pk_test_aKbqY4OPq3q8Y7lKqNYwnPmR00kfZymARH");

// Font size is defined a little larger
var style = {
  base: {
    fontSize: "16px",
  },
};

var elements = stripe.elements();
var card = elements.create("card", { hidePostalCode: true, style: style });
card.mount("#card-element");