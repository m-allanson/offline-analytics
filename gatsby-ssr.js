const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([<script />])
}

// gatsby-plugin-glamor does something like this:
//
// setHeadComponents([
//     <script
//       id="glamor-ids"
//       key="glamor-ids"
//       dangerouslySetInnerHTML={{
//         __html: `
//             // <![CDATA[
//             window._glamor = []
//             // ]]>
//             `,
//       }}
//     />,
//   ])
