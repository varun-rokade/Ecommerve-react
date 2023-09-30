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

    static ProductListBySubCategory(Category,subCategory) {
        return this.BaseUrl+"/productlistbysubcategory/"+Category+"/"+subCategory;
    }

    static SliderUrl = this.BaseUrl+"/allslider"

    static ProductDetails(id) {
        debugger
        return this.BaseUrl+"/productdetails/"+id
    }
    
    static ProductBySearch(searchKey) {
        return this.BaseUrl+"/search/"+searchKey
    }

    static Notification = this.BaseUrl+'/notification'

}

export default AppURL