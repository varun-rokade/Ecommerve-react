class AppURL {
    static BaseUrl = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseUrl+"/getvisitor"
    static ContactDetails = this.BaseUrl+"/postcontact"
    static AllSiteInfo = this.BaseUrl+"/allsiteinfo"
}

export default AppURL