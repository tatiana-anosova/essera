import { apiClient } from '@/api/apiClient';
import { ContactMessage, CreateContactMessageDto } from "@/interfaces/contact-message.interface";

export async function createContactMessage(payload: CreateContactMessageDto): Promise<ContactMessage> {
	return apiClient<ContactMessage>('/contact-messages', {
		method: 'POST',
		body: JSON.stringify(payload),
	})
}
