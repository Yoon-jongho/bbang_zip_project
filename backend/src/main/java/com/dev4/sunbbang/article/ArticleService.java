package com.dev4.sunbbang.article;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dev4.sunbbang.model.ArticleVO;
import com.dev4.sunbbang.repository.ArticleRepository;

@Transactional
@Service
public class ArticleService {

	@Autowired
	ArticleRepository ar;

	public Page<ArticleVO> articleList(Pageable pageVO) {
		return ar.findAll(pageVO);
	}
	public void wrtieArticle(ArticleVO vo) {
		ar.save(vo);
	}
	public Optional<ArticleVO> readArticle(ArticleVO vo) {
		return ar.findByArticleSeq(vo.getArticleSeq());
	}
	public void modifyArticle(ArticleVO vo) {
		ar.save(vo);
	}
	public void deleteArticle(ArticleVO vo) {
		ar.delete(vo);
	}
	public void writeReply(ArticleVO vo) {
		ar.save(vo);
	}
	public void modifyReply(ArticleVO vo) {
		ar.save(vo);
	}
	public void deleteReply(ArticleVO vo) {
		ar.delete(vo);
	}
	public void reportArticle(ArticleVO vo) {
		int totalReport=Integer.parseInt(vo.getReport());
	if(totalReport<5)
		totalReport=totalReport+1;
	else 
		ar.reportArticle(vo);
	}
}