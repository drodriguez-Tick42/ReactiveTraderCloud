type SymphonyServices = "applications-nav" | "ui" | "share" | "entity" | "modules"

type UIExtensionTypes = "single-user-im" | "multi-user-im" | "room" | "profile" | "hashtag" | "cashtag"
interface UIService {
    registerExtension: (uiClass: UIExtensionTypes, id: string, serviceName: string, options: {
        icon?: string,
        label?: string,
        data?: any
    }) => void
}

interface NavService {
    add: (id: string, title: string | { title: string, icon: string }, serviceName: string) => void
    focus: (navItem: string) => void
}

interface ModuleService {
    openLink: (link: string) => void
    addMenuItem: (moduleId: string, title: string, itemId: string) => void
    setHandler: (moduleId: string, serviceName: string) => void
    focus: (navItem: string) => void
    show: (id: string, title: string | { title: string, icon: string }, serviceName: string, iframe: string, options: { canFloat?: boolean, parentModuleId?: string }) => void

}

interface Service {
    implement: (implementations: {
        menuSelect?: (itemId: String) => void
        select?: (itemId: String) => void
    }) => void
}

type TypeName<T extends SymphonyServices> =
    T extends "ui" ? UIService :
    T extends "applications-nav" ? NavService :
    T extends "modules" ? ModuleService :
    never;

interface Services {
    register: (name: string, servicesWanted?: string[], servicesSent?: string[]) => Service
    subscribe: <S extends SymphonyServices> (service: S) => TypeName<S>
}


interface Remote {
    hello: () => Promise<{ themeV2: Theme }>
}

interface Application {
    register: (name: string, symphonyModules: SymphonyServices[], appModules: string[]) => Promise<{ userReferenceId: string }>
}

interface Theme {
    name: string
    size: string
    classes: string[]
}

export interface SymphonyClient {
    services: Services
    remote: Remote
    application: Application
}
