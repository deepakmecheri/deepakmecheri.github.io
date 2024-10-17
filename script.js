import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.2.min.js"

const { button, div, input, span, p, img, hr } = van.tags

const Website = () => {
    return div([
        TopBar(),
        Photo(),
        Name(),
        Bio(),
        SocialMedia(),
        Contact(),
        Footer()
    ])
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
        div({ style: TopBarItemStyle }, span("About")),
        div({ style: TopBarItemStyle }, span("Contact")),
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
    return div({style: NameStyle}, [
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
    const HrStyle = () => {
        return `
            width: 50%; /* Set the desired length */
        `
    }
    return div({style: BioStyle}, [
        p("Although I rarely match the vibes this picture gives off, I aspire to be this excited about life in general."),
        hr({style: HrStyle}),
        p("This is where I should introduce myself and define who I am. Define... hmm... After quite some seconds of deliberation it dawns unto me that I cannot quite define myself 😕, so I'll write a haiku instead."),
        hr({style: HrStyle}),
        p("The eye that sees cannot see itself."),
        p("Yet when it tries it sees,"),
        p("All that it sees."),
        hr({style: HrStyle}),
        p("To be honest, after writing this I did end up thinking it's too corny. But as Buddha once said, \"Do not kill the part of you that is cringe, kill the part that cringes\"."),
        hr({style: HrStyle})
    ])
}

const SocialMedia = () => {
    return div([
        div([
            span("Social Media")
        ])
    ])
}

const Contact = () => {
    return div([
        div([
            span("Contact")
        ])
    ])
}

const Footer = () => {
    return div([
        div([
            span("Footer")
        ])
    ])
}


van.add(document.body, Website())