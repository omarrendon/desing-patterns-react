import { PageProtected } from "./PageProtected";
import { WithAuthProtection } from "./WithAuthProtection";

// Definimos una variable la cual hará referencia
// A la página que deseamos proteger usando nuestro HOC.
const HOCProtected = WithAuthProtection(PageProtected);

export default HOCProtected;
