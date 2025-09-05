export type ContactStatus = 'NEW' | 'READ' | 'ARCHIVED';

export interface CreateContactMessageDto {
	name: string;
	email: string;
	comment: string;
}

export interface ContactMessage {
	id: string;
	name: string;
	email: string;
	comment: string;
	createdAt: string;      // ISO
	ip?: string | null;
	userAgent?: string | null;
	status: ContactStatus;
}
