# Dart


## Installation
Add paystring package to your flutter/dart project [here](https://pub.dev/packages/paystring)


```
flutter pub add paystring
```

or

```
dependencies:
  paystring: ^0.0.2
```

## Usage

fetch addresses

```
  Paystring().fetchAddresses(String value,String ledger, String network)
```

example


```
  Paystring().fetchAddresses("alice$pay.icp.foo","icp","mainnet")
```