import GoogleAnalytics from '~/analytics/google-analytics'
import { CopyAttribution } from '~/analytics/events'
import { COPY_ATTRIBUTION } from '~/constants/action-types'

export const actionsCreator = (googleAnalytics) => ({
  [COPY_ATTRIBUTION](_, params) {
    const event = CopyAttribution(params.type, params.content)
    googleAnalytics().sendEvent(event)
  },
})

export const actions = actionsCreator(GoogleAnalytics)
