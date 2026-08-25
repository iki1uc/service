// ============================================================
// user · Benutzer-Flow · Identität · Zustand
// ============================================================

export const USER = {
    name: 'user',
    status: 'initialisiert',
    user: null,
    level: 0,

    init() {
        this.status = 'aktiv';
        this.log('👤 user: Benutzer-Flow aktiviert');
        return this;
    },

    setUser(name, level = 1) {
        this.user = name;
        this.level = level;
        this.log(`👤 user: ${name} (Level ${level})`);
        return { name, level };
    },

    getStatus() {
        return {
            status: this.status,
            user: this.user,
            level: this.level
        };
    },

    log(msg) {
        console.log(`[user] ${msg}`);
    }
};
