import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import EpisodePreview from "./preview-templates/EpisodePreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("episode", EpisodePreview);
