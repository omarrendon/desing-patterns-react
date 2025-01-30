import { PageProtected } from "./PageProtected";
import { WithAuthProtection } from "./WithAuthProtection";

const HOCProtected = WithAuthProtection(PageProtected);

export default HOCProtected;
