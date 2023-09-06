# Javascript / NPM

```
npm i @the-registry/tir
```

### Methods

Fetch a PayString async

```ts
getPayStringAsync(
    payString: string,
    options?: { chain?: string; environment?: string}
    ): Promise<PaymentInformation | undefined>
```

Fetch a PayString debounced, result gets returned in the callback

```ts
getPayStringDebounce(
  callback: (data: PaymentInformation | undefined) => void,
  payString: string,
  debounceTime = minDebounceTime,
): void

```

Parse a PayString, throws an error if not parseable by protocol standards

```ts
parsePayString(payString: string): string

```

Parse a PayString url, throws an error if not parseable by protocol standards

```ts
parsePayStringUrl(payString: string): URL

```

Splits the PayString to return the prefix and domain, throws an error if not parseable by protocol standards

```ts
splitPayString(payString: string): { prefix: string; domain: string }
```

Converts the PayString to an URL

```ts
convertPayStringToUrl(payString: string): URL
```

Converts a PayString URL to a PayString

```ts
convertUrlToPayString(payStringUrl: string): string
```

### Interfaces

```ts
interface PaymentInformation {
	addresses: Address[];
	payId?: string;
	memo?: string;
}
```

```ts
enum AddressDetailsType {
	CryptoAddress = 'CryptoAddressDetails',
	FiatAddress = 'FiatAddressDetails'
}
```

```ts
interface CryptoAddressDetails {
	address: string;
	tag?: string;
}
```

```ts
interface FiatAddressDetails {
	accountNumber: string;
	routingNumber?: string;
}
```

```ts
interface Address {
	paymentNetwork: string;
	environment?: string;
	addressDetailsType: AddressDetailsType;
	addressDetails: CryptoAddressDetails | FiatAddressDetails;
}
```
