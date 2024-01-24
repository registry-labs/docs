# Javascript / NPM


installation

```
npm i @the-registry/tir
```

repository 

```
https://github.com/registry-labs/NPM_theregistry-paystring
```
### Methods

```ts
/**
 * Find a PayString and return the payment information.
 * @param prefix The part before the "$" for the PayString.
 * @param domain The domain to use for fetching the PayString.
 * @param options Options to search for specific PaymentInformation per network and / or environment.
 *
 * @returns `PaymentInformation` or `undefined` when none is found.
 */
async function getPayStringAsync(
  prefix: string,
  domain: string,
  options?: Options,
): Promise<PaymentInformation | undefined>;
```

```ts
/**
 * Find a PayString and return the payment information with a debounce and callback.
 * @param callback Returns the PaymentInformation when the query is done, or undefined when none is found.
 * @param prefix The part before the "$" for the PayString.
 * @param domain The domain to use for fetching the PayString.
 * @param options Options to search for specific PaymentInformation per network and / or environment.
 * @param debounceTime Time it takes between the last keypress and the actual query call.
 *
 * @returns `void`.
 */
function getPayStringDebounce(
  callback: (data: PaymentInformation | undefined) => void,
  prefix: string,
  domain: string,
  options?: Options,
  debounceTime?: number, // defaults to the minumum of 300ms
): void;
```

```ts
/**
 * Search for a paystring based on a query and return the payment information.
 * @param query The search query the paystring should match
 * @param domain The domain to use for searching the PayString.
 * @param options Options to search for specific PaymentInformation per network and / or environment.
 *
 * @returns `PaymentInformation[]` or `[]` when none is found.
 */
async function searchPayString(query: string, domain: string, options?: Options): Promise<PaymentInformation[]>;
```

```ts
/**
 * Search for a PayString and return the payment information with a debounce and callback.
 * @param callback Returns the PaymentInformation when the query is done, or undefined when none is found.
 * @param query The search query the paystring should match
 * @param domain The domain to use for fetching the PayString.
 * @param options Options to search for specific PaymentInformation per network and / or environment.
 * @param debounceTime Time it takes between the last keypress and the actual query call.
 *
 * @returns `void`.
 */
function searchPayStringDebounce(
  callback: (data: PaymentInformation[]) => void,
  query: string,
  domain: string,
  options?: Options,
  debounceTime = minDebounceTime,
): void;
```

```ts
/**
 * Check the validity of a paystring
 * @param payString the complete PayString "prefix$domain.extension"
 *
 * @returns paystring from input argument in lowercase or `undefined` if not parsable.
 */
function parsePayString(payString: string): string | undefined;
```

```ts
/**
 * Create an URL object from the PayString
 * @param payString the complete paystring "prefix$domain.extension"
 *
 * @returns JS `URL` object or `undefined` if not parsable.
 */
function parsePayStringUrl(payString: string): URL | undefined;
```

```ts
/**
 * Splits a PayString into its prefix and domain.
 * @param payString the complete paystring "prefix$domain.extension"
 *
 * @returns `{ prefix: string, domain: string }` or `undefined` if not parsable.
 */
function splitPayString(payString: string): { prefix: string; domain: string } | undefined;
```

```ts
/**
 * Check the validity of a paystring prefix and if its url parsable
 * @param prefix the prefix of a paystring
 *
 * @returns `true` if valid, `false` otherwise.
 */
function isValidPrefix(prefix: string): boolean;
```

```ts
/**
 * Create an URL object from the PayString
 * @param payString the complete paystring "prefix$domain"
 *
 * @returns `URL` or undefined if not parsable.
 */
function convertPayStringToUrl(payString: string): URL | undefined;
```

```ts
/**
 * Convert a PayString URL to a PayString
 * @param payStringUrl the url of a paystring "https://domain/prefix"
 * @returns paystring as `string` or `undefined` if not parsable.
 */
function convertUrlToPayString(payStringUrl: string): string | undefined;
```

```ts
/**
 * Check if a domain is trusted by the PayString Canister
 * @param domain the domain to check
 *
 * @returns `true` if trusted, `false` otherwise.
 */
async function isTrustedDomain(domain: string): Promise<boolean>;
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
  FiatAddress = 'FiatAddressDetails',
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

```ts
// - chain: ex; icp
// - network: ex; mainnet
// - version: ex; 1.0 (paystring version)
// - verifiedDomainOnly: Only use verified domains default: `true`
interface Options {
  chain?: string;
  environment?: string;
  version?: string;
  verifiedDomainOnly?: boolean;
}
```