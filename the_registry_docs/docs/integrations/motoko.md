# Motoko
you can directly use the Motoko language in your project. To do so, you need to add the following to your project


## Installation

### Using HTTP


### Using inter-canister calls
Add methods from following did in your project


```
type PayString = service {
  add : (text, Address) -> ();
  auction : (text) -> (nat32);
  delete : (text, Address) -> ();
  deleteAll : (text) -> ();
  getAuctionTime : () -> (nat) query;
  getCounter : () -> (nat) query;
  getPayId : (text, text, opt text) -> (vec Address) query;
  getPrice : (text) -> (nat) query;
  payStringExist : (text) -> (bool) query;
};
```


```
type FiatAddressDetails = 
 record {
   accountNumber: text;
   routingNumber: opt text;
 };
type CryptoAddressDetails = 
 record {
   address: text;
   tag: opt text;
 };
type AddressDetailsType = 
 variant {
   CryptoAddress;
   FiatAddress;
 };
type AddressDetails = 
 variant {
   CryptoAddressDetails: CryptoAddressDetails;
   FiatAddressDetails: FiatAddressDetails;
 };
type Address = 
 record {
   addressDetails: AddressDetails;
   addressDetailsType: AddressDetailsType;
   environment: opt text;
   paymentNetwork: text;
 };

service : {
  add: (text, Address) -> ();
  auction: (text) -> (nat32);
  delete: (text, Address) -> ();
  deleteAll: (text) -> ();
  getPayId: (text, text, opt text) -> (vec Address) query;
  getPayIdCount: () -> (nat32) query;
  getPrice: (text) -> (nat) query;
  http_request: (HttpRequest) -> (HttpResponse) query;
  payStringExist: (text) -> (bool) query;
  setPrice: (nat32, nat) -> ();
}
```


```
public func service(canister : Text) : actor {
        getPayId : shared query (Text, Text, Text) -> async Nat;
        allowance : shared query (Principal, Principal) -> async Nat;
        transferFrom : shared (Principal, Principal, Nat) -> async TxReceipt;
        transfer : shared (Principal, Nat) -> async TxReceipt;
    } {
        return actor (canister) : actor {
            balanceOf : shared query Principal -> async Nat;
            allowance : shared query (Principal, Principal) -> async Nat;
            transferFrom : shared (Principal, Principal, Nat) -> async TxReceipt;
            transfer : shared (Principal, Nat) -> async TxReceipt;
        };
    };
```