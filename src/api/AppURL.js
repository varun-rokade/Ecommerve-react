class AppURL {
    static BaseUrl = "http://127.0.0.1:8000/api"
    static VisitorDetails = this.BaseUrl+"/getvisitor"
    static ContactDetails = this.BaseUrl+"/postcontact"
    static AllSiteInfo = this.BaseUrl+"/allsiteinfo"
    static AllCategory = this.BaseUrl+"/allcategory"
    static ProductListByRemark(Remark) {
        return this.BaseUrl+"/productlistbyremark/"+Remark;
    }

    static ProductListByCategory(Category) {
        return this.BaseUrl+"/productlistbycategory/"+Category;
    }

    static ProductListBySubCategory(Remark) {
        return this.BaseUrl+"/productlistbysubcategory/"+Remark;
    }

}

export default AppURL