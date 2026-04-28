import '../../../css/bio.css';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

const languages = [
	{
		id: 'en',
		label: 'Ingles',
	},
	{
		id: 'es',
		label: 'Castellano',
	},
	{
		id: 'ca',
		label: 'Catalan',
	},
];

const textareaGroups = [
	{
		id: 'summary',
		title: 'Texto principal',
		description: 'Contenido general en cada idioma.',
	},
	{
		id: 'bio',
		title: 'Bio',
		description: 'Biografia personal en cada idioma.',
	},
	{
		id: 'professional_career',
		title: 'Trayectoria profesional',
		description: 'Resumen profesional en cada idioma.',
	},
];

export default function Bio() {
	return (
		<section className="bio-section">
			<div className="bio-header">
				<h1 className="bio-title">Sobre mi</h1>
				<p className="bio-description">
					Gestiona el contenido biografico que se mostrara en la web.
				</p>
			</div>

			<form className="bio-form">
				<div className="bio-card">
					<div className="bio-card-header">
						<h2 className="bio-card-title">Titulos</h2>
						<p className="bio-card-description">
							Define el titulo principal para cada idioma.
						</p>
					</div>

					<div className="bio-grid bio-grid--three">
						{languages.map((language) => (
							<div key={`title-${language.id}`}>
								<InputLabel
									htmlFor={`title_${language.id}`}
									value={`Titulo - ${language.label}`}
								/>
								<TextInput
									id={`title_${language.id}`}
									name={`title_${language.id}`}
									className="bio-field"
									placeholder={`Titulo en ${language.label.toLowerCase()}`}
								/>
							</div>
						))}
					</div>
				</div>

				{textareaGroups.map((group) => (
					<div key={group.id} className="bio-card">
						<div className="bio-card-header">
							<h2 className="bio-card-title">{group.title}</h2>
							<p className="bio-card-description">{group.description}</p>
						</div>

						<div className="bio-grid bio-grid--three-large">
							{languages.map((language) => (
								<div key={`${group.id}-${language.id}`}>
									<InputLabel
										htmlFor={`${group.id}_${language.id}`}
										value={`${group.title} - ${language.label}`}
									/>
									<textarea
										id={`${group.id}_${language.id}`}
										name={`${group.id}_${language.id}`}
										className="bio-textarea"
										placeholder={`${group.title} en ${language.label.toLowerCase()}`}
									/>
								</div>
							))}
						</div>
					</div>
				))}

				<div className="bio-card">
					<div className="bio-card-header">
						<h2 className="bio-card-title">Datos adicionales</h2>
						<p className="bio-card-description">
							Informacion complementaria de la ficha biografica.
						</p>
					</div>

					<div className="bio-grid bio-grid--details">
						<div>
							<InputLabel htmlFor="image" value="Imagen" />
							<input
								id="image"
								name="image"
								type="file"
								className="bio-file-input"
							/>
						</div>

						<div>
							<InputLabel htmlFor="birthdate" value="Fecha de nacimiento" />
							<TextInput id="birthdate" name="birthdate" type="date" className="bio-field" />
						</div>

						<div>
							<InputLabel htmlFor="years_active_from" value="Activo desde" />
							<TextInput id="years_active_from" name="years_active_from" type="date" className="bio-field" />
						</div>

						<div>
							<InputLabel htmlFor="years_active_to" value="Activo hasta" />
							<TextInput id="years_active_to" name="years_active_to" type="date" className="bio-field" />
						</div>

						<div>
							<InputLabel htmlFor="years_active_current" value="Activo actualmente" />
							<TextInput id="years_active_current" name="years_active_current" type="date" className="bio-field" />
						</div>

						<div>
							<InputLabel htmlFor="employer" value="Employer" />
							<TextInput
								id="employer"
								name="employer"
								className="bio-field"
								placeholder="Nombre de la empresa o cliente"
							/>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
}
