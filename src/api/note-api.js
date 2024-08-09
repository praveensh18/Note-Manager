import axios from "axios";

const BASE_URL = 'http://localhost:3200/notes';

export class NoteAPI {

static async fetchAllNotes() {
	const response = await axios.get(`${BASE_URL}`)
	return response.data
}

static async fetchNoteById(noteId) {
	const response = await axios.get(`${BASE_URL}/${noteId}`)
	return response.data
}

static async createNote(note) {
	const response = await axios.post(`${BASE_URL}`, note)
	return response.data
}

static async updateNoteById(noteId, values) {
	const response = await axios.patch(`${BASE_URL}/${noteId}`, values)
	return response.data
}

static async deleteNoteById(noteId) {
	const response = await axios.delete(`${BASE_URL}/${noteId}`)
	return response.data
}

}
