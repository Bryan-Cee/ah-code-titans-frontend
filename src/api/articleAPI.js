/* eslint-disable consistent-return */
import instance from "./axiosConfig";
import toastr from "../helpers/toastrConfig";

// instance.defaults.headers.common.Authorization = this.state.user;
export default class ArticleAPI {
  static createArticle(articleDetails) {
    const {
      // eslint-disable-next-line camelcase
      title, description, body, tag_list
    } = articleDetails;
    return instance.post("/api/articles/",
      {
        article: {
          title,
          description,
          body,
          tag_list: tag_list.split(",")
        }
      }).then((response) => {
      if (response) {
        window.location.assign(`/article/${response.data.slug}`);
        return {
          success: true,
          article: response.data
        };
      }
    }).catch((error) => {
      if (error.response) {
        toastr.warning("Please login to post an article");
        return {
          success: false,
          error: error.response.data
        };
      }
      if (error.response.status === 503) {
        toastr.warning("Please login to post an article");
        return {
          success: false,
          error: error.response.data
        };
      }
    });
  }

  static getSingleArticle(slug) {
    return instance.get(`/api/article/${slug}`, {})
      .then(response => ({
        success: true,
        content: response.data.articles
      }))
      .catch((response) => {
        if (response.response.status !== 200) {
          return {
            success: false,
            error: {
              message: "Failed to retrieve the article!"
            }
          };
        }
      });
  }
}