const homepageMiddleware = (req, res) => {
    const arrStore = []/* ... populate arrStore with data ... */;
    res.render("main", { arrStore: arrStore });
}

export default homepageMiddleware;