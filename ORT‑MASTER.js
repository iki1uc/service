// ============================================================
// ORT · MASTER · verbindet alle ORT-Ebenen
// ============================================================

import { ORT_ROUTER } from "./router.js";
import { ORT_NAV } from "./nav.js";
import { AXIOM2 } from "./AXIOM2.service.js";
import { STATION } from "./STATION.axis.js";

export const ORT_MASTER = {

    async boot() {
        console.log("🚀 ORT-MASTER: Starte ORT…");

        // 1. Router laden
        await ORT_ROUTER.loadUser();

        // 2. Navigation aktivieren
        ORT_NAV();

        // 3. Axiom2 aktivieren
        AXIOM2.init?.();

        // 4. Stationen aktivieren
        STATION.init?.();

        // 5. Startzone
        ORT_ROUTER.go("home");

        console.log("✅ ORT-MASTER aktiv");
    }
};
