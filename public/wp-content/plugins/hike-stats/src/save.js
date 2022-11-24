/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save() } >
			<div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						 stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round"
							  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
					</svg>
					<RichText.Content className="ascent" tagName="h4" value={ attributes.ascent }/>
					<p>Total Ascent</p>
				</div>
			</div>

			<div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						 stroke="currentColor" className="mb-3 inline-block h-10 w-10 text-teal-400">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"/>
					</svg>
					<RichText.Content className="descent" tagName="h4" value={ attributes.descent }/>
					<p>Total Descent</p>
				</div>
			</div>
			<div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						 stroke="currentColor" className="mb-3 inline-block h-10 w-10 text-teal-400">
						<path stroke-linecap="round" stroke-linejoin="round"
							  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/>
					</svg>
					<RichText.Content className="distance" tagName="h4" value={ attributes.distance }/>
					<p>Total Distance</p>
				</div>
			</div>
			<div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						 stroke="currentColor" className="mb-3 inline-block h-10 w-10 text-teal-400">>
						<path stroke-linecap="round" stroke-linejoin="round"
							  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
					</svg>
					<RichText.Content className="highest-elevation" tagName="h4" value={ attributes.highestElevation }/>
					<p>Highest Elevation</p>
				</div>

			</div>
			<div>
				<div>
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
						 stroke="currentColor" className="mb-3 inline-block h-10 w-10 text-teal-400">
						<path stroke-linecap="round" stroke-linejoin="round"
							  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
					</svg>
					<RichText.Content className="duration" tagName="h4" value={ attributes.duration }/>
					<p>Duration</p>
				</div>
			</div>
		</div>
	);

}
