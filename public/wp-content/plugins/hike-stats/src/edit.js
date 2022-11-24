/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps() } >
			<div>
				<div>
					<RichText
						tagName="h4"
						value={ attributes.ascent }
						allowedFormats={ [  ] }
						onChange={ ( ascent ) => setAttributes( { ascent } ) }
						placeholder="1865 M"
					/>
					<p>Total Ascent</p>
				</div>
			</div>

			<div>
				<div>
					<RichText
						tagName="h4"
						value={ attributes.descent }
						allowedFormats={ [  ] }
						onChange={ ( descent ) => setAttributes( { descent } ) }
						placeholder="1300 M"
					/>
					<p>Total Descent</p>
				</div>
			</div>
			<div>
				<div>
					<RichText
						tagName="h4"
						value={ attributes.distance }
						allowedFormats={ [  ] }
						onChange={ ( distance ) => setAttributes( { distance } ) }
						placeholder="21 KM"
					/>
					<p>Total Distance</p>
				</div>
			</div>
			<div>
				<div>
					<RichText
						tagName="h4"
						value={ attributes.highestElevation }
						allowedFormats={ [  ] }
						onChange={ ( highestElevation ) => setAttributes( { highestElevation } ) }
						placeholder="3734 M"
					/>
					<p>Highest Elevation</p>
				</div>

			</div>
			<div>
				<div>
					<RichText
						tagName="h4"
						value={ attributes.duration }
						allowedFormats={ [  ] }
						onChange={ ( duration ) => setAttributes( { duration } ) }
						placeholder="2 Days"
					/>
					<p>Duration</p>
				</div>
			</div>
		</div>
	);
}
