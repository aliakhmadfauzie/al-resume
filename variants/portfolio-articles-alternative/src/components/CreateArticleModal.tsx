import React, { useState } from 'react';
import { ArticleItem, NewArticleInput } from '../types';
import { X, Plus, Sparkles, BookOpen, Eye, Edit3, Calendar, Tag, AlertCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface CreateArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateArticle: (newArticle: ArticleItem) => void;
}

export const CreateArticleModal: React.FC<CreateArticleModalProps> = ({
  isOpen,
  onClose,
  onCreateArticle,
}) => {
  const todayFormatted = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  const [formData, setFormData] = useState<NewArticleInput>({
    title: '',
    date: todayFormatted,
    category: 'powerplatform',
    excerpt: '',
    content: '',
    tags: '',
    authorName: 'Ali Akhmad Fauzie',
  });

  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  const [errorMessage, setErrorMessage] = useState<string>('');

  if (!isOpen) return null;

  const calculateReadTime = (text: string) => {
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.max(1, Math.ceil(words / 180));
    return `${minutes} min read`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim()) {
      setErrorMessage('Please enter an article title.');
      return;
    }
    if (!formData.excerpt.trim()) {
      setErrorMessage('Please enter a brief excerpt or summary.');
      return;
    }
    if (!formData.content.trim()) {
      setErrorMessage('Please write some content for your article.');
      return;
    }

    const slug = formData.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    const tagsArray = formData.tags
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const articleItem: ArticleItem = {
      id: `art-custom-${Date.now()}`,
      slug: slug || `article-${Date.now()}`,
      title: formData.title.trim(),
      date: formData.date || todayFormatted,
      readTime: calculateReadTime(formData.content),
      category: formData.category,
      excerpt: formData.excerpt.trim(),
      content: formData.content.trim(),
      tags: tagsArray.length > 0 ? tagsArray : ['Engineering', 'Power Platform'],
      author: {
        name: formData.authorName?.trim() || 'Ali Akhmad Fauzie',
        role: 'Author & Contributor',
      },
      featured: false,
      isCustom: true,
    };

    onCreateArticle(articleItem);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#fdfdfc] border border-[#121212] w-full max-w-3xl shadow-2xl overflow-hidden relative my-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#f7f7f0] border-b border-[#e0e0d8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#fdfdfc] border border-[#e0e0d8] flex items-center justify-center text-[#121212]">
              <Edit3 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif-display italic text-2xl font-light text-[#121212] tracking-tight">
                Publish Technical Writing
              </h2>
              <p className="text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63]">
                Add article, architecture review, or leadership playbook
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            id="close-create-article-modal-btn"
            className="p-1.5 bg-[#fdfdfc] border border-[#e0e0d8] text-[#121212] hover:bg-[#e0e0d8] transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Tab Switcher: Write vs Markdown Preview */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-[#f7f7f0] border-b border-[#e0e0d8] font-mono-code text-xs">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setActiveTab('write')}
              className={`flex items-center gap-1.5 px-3 py-1 uppercase tracking-wider text-[0.7rem] transition-all cursor-pointer ${
                activeTab === 'write'
                  ? 'bg-[#121212] text-[#fdfdfc]'
                  : 'text-[#444440] hover:text-[#121212]'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editor</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={`flex items-center gap-1.5 px-3 py-1 uppercase tracking-wider text-[0.7rem] transition-all cursor-pointer ${
                activeTab === 'preview'
                  ? 'bg-[#121212] text-[#fdfdfc]'
                  : 'text-[#444440] hover:text-[#121212]'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview</span>
            </button>
          </div>
          <span className="text-[0.65rem] uppercase tracking-wider text-[#6b6b63]">
            Markdown Supported
          </span>
        </div>

        {/* Form or Preview */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
          {errorMessage && (
            <div className="p-3 bg-[#f7f7f0] border border-[#121212] text-[#121212] font-mono-code text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {activeTab === 'write' ? (
            <>
              {/* Title */}
              <div>
                <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5">
                  Article Title *
                </label>
                <input
                  type="text"
                  id="article-title-input"
                  required
                  placeholder="e.g. Building Resilient Power Automate Cloud Flows with Scopes"
                  value={formData.title}
                  onChange={(e) => {
                    setFormData({ ...formData, title: e.target.value });
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] focus:outline-none focus:border-[#121212]"
                />
              </div>

              {/* Grid: Category, Date, Author */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5">
                    Category
                  </label>
                  <select
                    id="article-category-select"
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value as NewArticleInput['category'],
                      })
                    }
                    className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] focus:outline-none focus:border-[#121212]"
                  >
                    <option value="powerplatform">Power Platform</option>
                    <option value="architecture">Enterprise Architecture</option>
                    <option value="operations">Operations & Leadership</option>
                    <option value="ai">AI & Automation</option>
                    <option value="devops">DevOps & ALM</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#6b6b63]" />
                    <span>Publish Date</span>
                  </label>
                  <input
                    type="text"
                    id="article-date-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] focus:outline-none focus:border-[#121212]"
                  />
                </div>

                <div>
                  <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5">
                    Author
                  </label>
                  <input
                    type="text"
                    id="article-author-input"
                    value={formData.authorName}
                    onChange={(e) =>
                      setFormData({ ...formData, authorName: e.target.value })
                    }
                    className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] focus:outline-none focus:border-[#121212]"
                  />
                </div>
              </div>

              {/* Tags */}
              <div>
                <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5 flex items-center gap-1">
                  <Tag className="w-3 h-3 text-[#6b6b63]" />
                  <span>Tags (Comma-separated)</span>
                </label>
                <input
                  type="text"
                  id="article-tags-input"
                  placeholder="Power Apps, Dataverse, CI/CD, Architecture"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] focus:outline-none focus:border-[#121212]"
                />
              </div>

              {/* Excerpt / Summary */}
              <div>
                <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5">
                  Brief Summary / Excerpt *
                </label>
                <textarea
                  id="article-excerpt-input"
                  required
                  rows={2}
                  placeholder="A one or two sentence overview displayed on the index feed..."
                  value={formData.excerpt}
                  onChange={(e) => {
                    setFormData({ ...formData, excerpt: e.target.value });
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full bg-[#f7f7f0] border border-[#e0e0d8] px-3 py-2 text-xs text-[#121212] focus:outline-none focus:border-[#121212] resize-none"
                />
              </div>

              {/* Content in Markdown */}
              <div>
                <label className="block text-[0.65rem] font-mono-code uppercase tracking-wider text-[#6b6b63] mb-1.5">
                  Article Body (Markdown Supported) *
                </label>
                <textarea
                  id="article-content-input"
                  required
                  rows={8}
                  placeholder="Write your article in Markdown... (e.g. ## Heading, *bullet points*, `code` snippets, etc.)"
                  value={formData.content}
                  onChange={(e) => {
                    setFormData({ ...formData, content: e.target.value });
                    if (errorMessage) setErrorMessage('');
                  }}
                  className="w-full bg-[#f7f7f0] border border-[#e0e0d8] p-3 font-mono-code text-xs text-[#121212] focus:outline-none focus:border-[#121212] resize-none"
                />
              </div>
            </>
          ) : (
            /* Live Markdown Preview */
            <div className="space-y-4 py-2">
              <div className="border-b border-[#e0e0d8] pb-4">
                <span className="label-mono bg-[#121212] text-[#fdfdfc] px-2 py-0.5">
                  {formData.category}
                </span>
                <h1 className="font-serif-display italic text-2xl font-light text-[#121212] mt-2">
                  {formData.title || 'Untitled Article'}
                </h1>
                <p className="text-xs font-mono-code text-[#6b6b63] mt-1">
                  {formData.date} • {calculateReadTime(formData.content || '')} • By{' '}
                  {formData.authorName}
                </p>
              </div>

              <div className="prose prose-neutral max-w-none text-[#444440] text-xs font-light leading-relaxed space-y-3">
                {formData.content ? (
                  <ReactMarkdown>{formData.content}</ReactMarkdown>
                ) : (
                  <p className="text-[#6b6b63] italic">No content typed yet.</p>
                )}
              </div>
            </div>
          )}

          {/* Form Actions */}
          <div className="pt-4 border-t border-[#e0e0d8] flex items-center justify-between font-mono-code text-xs">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-[#f7f7f0] hover:bg-[#e0e0d8] text-[#121212] border border-[#e0e0d8] uppercase tracking-wider transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              id="publish-article-submit-btn"
              className="flex items-center gap-1.5 px-5 py-2 bg-[#121212] hover:bg-[#222222] text-[#fdfdfc] uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Publish Article</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
