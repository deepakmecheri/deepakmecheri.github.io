import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.5.2.min.js"

const { button, div, input, span, p, img } = van.tags

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
        `
    }
    return div({style: BioStyle}, [
        
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