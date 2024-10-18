import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.2.min.js"

const { button, div, input, span, p, img, hr, a } = van.tags

const Website = () => {
    return div([
        TopBar(),
        Photo(),
        Name(),
        Bio(),
        SocialMedia(),
    ])
}

const Hr = () => {
    const HrStyle = () => {
        return `
            width: 50%;
        `
    }
    return hr({ style: HrStyle })
}

const TopBar = () => {
    const TopBarStyle = () => {
        return `
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
        `
    }

    const TopBarItemStyle = () => {
        return `
            margin: 0 10px;
        `
    }

    return div({ style: TopBarStyle }, [
        div({ style: TopBarItemStyle }, span("Home")),
        div({ style: TopBarItemStyle }, span("Notes")),
        div({ style: TopBarItemStyle }, span("Blog")),
        div({ style: TopBarItemStyle }, span("Portfolio"))
    ])
}

const Photo = () => {
    const PhotoContainerStyle = () => {
        return `
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
        `
    }

    const PhotoStyle = () => {
        return `
            width: 50%;
            max-width: 400px;
            border-radius: 50%;
        `
    }
    return div({ style: PhotoContainerStyle }, [
        img({ src: "measf.jpg", alt: "measf", style: PhotoStyle })
    ])
}

const Name = () => {
    const NameStyle = () => {
        return `
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            flex-direction: column;
        `
    }
    return div({ style: NameStyle }, [
        div("Me Asf"),
        div("Deepak മേച്ചേരി")
    ])
}

const Bio = () => {
    const BioStyle = () => {
        return `
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            flex-direction: column;
            text-align: center;
        `
    }

    return div({ style: BioStyle }, [
        p("Although I rarely match the vibes this picture gives off, I aspire to be this excited about life in general."),
        Hr(),
        p("This is where I should introduce myself and define who I am. Define... hmm... After quite some seconds of deliberation it dawns unto me that I cannot quite define myself 😕, so I'll write a haiku instead."),
        Hr(),
        p("The eye cannot see"),
        p("Itself, yet when it tries hard"),
        p("It sees all it sees."),
        Hr(),
        p("To be honest, after writing this I did end up thinking it's too corny. But as Buddha once said, \"Do not kill the part of you that is cringe, kill the part that cringes\"."),
        Hr()
    ])
}

const SocialMedia = () => {
    const SocialMediaStyle = () => {
        return `
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 20px 0;
            flex-direction: row;
        `
    }

    const ButtonStyle = () => {
        return `
            margin: 0 10px;
        `
    }

    const LogoStyle = () => {
        return `
            width: 24px;
            height: 24px;
        `
    }

    return div({style: SocialMediaStyle}, [
        div({style: ButtonStyle}, [
            a({ href: "https://x.com/DeepakMecheri", target: "_blank" }, [
                img({ src: "static/icons/twitter.png", alt: "Twitter", style: LogoStyle })
            ])
        ]),
        div({style: ButtonStyle}, [
            a({ href: "https://www.instagram.com/mecheri__/", target: "_blank" }, [
                img({ src: "static/icons/instagram.png", alt: "Instagram", style: LogoStyle })
            ])
        ]),
        div({style: ButtonStyle}, [
            a({ href: "https://www.linkedin.com/in/deepak-mecheri/", target: "_blank" }, [
                img({ src: "static/icons/linkedin.png", alt: "LinkedIn", style: LogoStyle })
            ])
        ]),
        div({style: ButtonStyle}, [
            a({ href: "https://github.com/deepakmecheri", target: "_blank" }, [
                img({ src: "static/icons/github.png", alt: "GitHub", style: LogoStyle })
            ])
        ]),
        div({style: ButtonStyle}, [
            a({ href: "https://www.youtube.com/@nemooverdrive760", target: "_blank" }, [
                img({ src: "static/icons/youtube.png", alt: "GitHub", style: LogoStyle })
            ])
        ])
    ])
}

van.add(document.body, Website())