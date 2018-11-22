import React from 'react'
import PropTypes from 'prop-types'
import { EpisodeTemplate } from '../../templates/episode'

const EpisodePreview = ({ entry, widgetFor }) => (
  <EpisodeTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    episodeNo={entry.getIn(['data', 'episodeNo'])}
    embed={entry.getIn(['data', 'embed'])}
    download={entry.getIn(['data', 'download'])}
    season={entry.getIn(['data', 'season'])}
    title={entry.getIn(['data', 'title'])}
  />
)

EpisodePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EpisodePreview
